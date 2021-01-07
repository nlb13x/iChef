package main

import (
	"github.com/gorilla/mux"
)

func main() {
	// Init router
	r := mux.NewRouter()

	// Router handlers / Endpoints for API

	r.HandleFunc("/")
}
