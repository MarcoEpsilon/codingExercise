package main

import (
	urlshort "urlshort/inner"
	"net/http"
	"flag"
	"os"
	"log"
	"path/filepath"
	"strings"
)
var HandlerFunc http.HandlerFunc
func init() {
	var fileName = flag.String("file", "example.json", "as data.json, data.yaml ...(default example.json)")
	var fileFormat = flag.String("format", "", "now suppot json, yaml format")
	flag.Parse()
	if *fileFormat == "" {
		*fileFormat = strings.TrimPrefix(filepath.Ext(*fileName), ".")
	}
	file, err := os.Open(*fileName)
	defer file.Close()
	if err != nil {
		log.Fatalf("%s", err.Error())
	}
	HandlerFunc = urlshort.NewHandlerFunc(file, *fileFormat)
}
/*
- path: /urlshort
  url: https://github.com/gophercises/urlshort
- path: /urlshort-final
  url: https://github.com/gophercises/urlshort/tree/solution
*/
func main() {
	/*source := map[string]string {
		"http": "https://marcoepsilon.site/golib/net/http/",
		"sort": "https://marcoepsilon.site/golib/sort/",
	}*/
	/*
		yaml format must use backspace replace tab
	*/
/*
	yamlSource := `
- path: http
  url: https://marcoepsilon.site/golib/net/http/
- path: sort
  url: https://marcoepsilon.site/golib/sort/
`
*/
/*
	jsonSource := `
		[
			{
				"path": "http",
				"url": "https://marcoepsilon.site/golib/net/http/"
			},
			{
				"path": "sort",
				"url": "https://marcoepsilon.site/golib/sort/"
			}
		]
	`
*/
	//http.ListenAndServe(":12000", urlshort.MapHandler(source))
	//http.ListenAndServe(":12000", urlshort.JSONHandler([]byte(jsonSource)))
    http.ListenAndServe(":12000", HandlerFunc)
}