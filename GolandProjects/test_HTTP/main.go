package main

import (
	"fmt"
	"io"
	"log"
	"net/http"
)

func main() {
	h1 := func(w http.ResponseWriter, _ *http.Request) {
		io.WriteString(w, "Hello from a HandleFunc #1!\n")
	}
	h2 := func(w http.ResponseWriter, _ *http.Request) {
		io.WriteString(w, "Hello from a HandleFunc #2!\n")
	}
	helloHandler := func(w http.ResponseWriter, r *http.Request) {
		// レスポンスを書き込む
		fmt.Fprintln(w, "Hello, World!")
	}

	http.HandleFunc("/", h1)
	http.HandleFunc("/endpoint", h2)
	http.HandleFunc("/hello", helloHandler)

	log.Fatal(http.ListenAndServe(":8080", nil))
}
