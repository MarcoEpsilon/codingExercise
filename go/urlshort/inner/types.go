package inner

import (
	"net/http"
	"strings"
	yaml "gopkg.in/yaml.v2" // for yaml format
	"log"
	"encoding/json" // for json format
	"io"
	"io/ioutil"
)

type Source map[string]string

type Handler func(source Source) http.HandlerFunc

func MapHandler(source Source) http.HandlerFunc {
	return http.HandlerFunc(
		func(w http.ResponseWriter, r *http.Request) {
			if url, ok := source[strings.TrimPrefix(r.URL.Path, "/")]; ok {
				http.Redirect(w, r, url, http.StatusFound)
			} else {
				http.NotFound(w, r)
			}
		},
	)
}
func parseYAMLToSource(data []byte) (Source, error) {
	type pathUrl struct {
		Path string `yaml:"path"`
		URL string	`yaml:"url"`
	}
	var pathUrls []pathUrl
	err := yaml.Unmarshal(data, &pathUrls)
	if err != nil {
		return nil, err
	}
	source := make(map[string]string)
	for _, value := range pathUrls {
		source[value.Path] = value.URL
	}
	return source, nil
}
func YAMLHandler(data []byte) http.HandlerFunc {
	source, err := parseYAMLToSource(data)
	if err != nil {
		log.Fatalf("Reason: %s", err.Error())
	}
	return MapHandler(source)
}
func parseJSONToSource(data []byte) (Source, error) {
	type pathUrl struct {
		Path string `json:"path"`
		URL string `json:"url"`
	}
	var pathUrls []pathUrl
	err := json.Unmarshal(data, &pathUrls)
	if err != nil {
		return nil, err
	}
	source := make(map[string]string)
	for _, value := range pathUrls {
		source[value.Path] = value.URL
	}
	return source, nil
}
func JSONHandler(data []byte) http.HandlerFunc {
	source, err := parseJSONToSource(data)
	if err != nil {
		log.Fatalf("Reason: %s", err.Error())
	}
	return MapHandler(source)
}
type Format string
const (
	JSON Format = "json"
	YAML Format = "yaml"
)
func NewHandlerFunc(dataReader io.Reader, format string) http.HandlerFunc {
	data, err := ioutil.ReadAll(dataReader)
	if err != nil {
		log.Fatal("read data from source failed!")
	}
	switch Format(format) {
	case JSON:
		return JSONHandler(data)
	case YAML:
		return YAMLHandler(data)
	default:
		log.Fatalf("source data format{%s} now is not supported", format)
	}
	// unreachable!
	return nil
}