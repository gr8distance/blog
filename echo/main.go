package main

import (
	"encoding/json"
	"fmt"
	"log"

	"io/ioutil"
	"net/http"
)

type Post struct {
	Id          string   `json:"id"`
	Title       string   `json:"title"`
	Author      string   `json:"author"`
	Body        string   `json:"body"`
	Date        string   `json:"date"`
	Description string   `json:"description"`
	HeaderImage string   `json:"header_image"`
	Keywords    []string `json:"keywords"`
	Tags        []string `json:"tags"`
	Year        string   `json:"year"`
	Month       string   `json:"month"`
	Day         string   `json:"day"`
}

type Response struct {
	Posts []Post `json:"posts"`
}

func fetch(url string) []byte {
	resp, _ := http.Get(url)
	defer resp.Body.Close()
	bytes, _ := ioutil.ReadAll(resp.Body)
	return bytes
}

func readFile(filename string) []byte {
	bytes, err := ioutil.ReadFile(filename)
	if err != nil {
		panic(err)
	}
	return bytes
}

func parseJSON(bytes []byte) []Post {
	var response Response
	if err := json.Unmarshal(bytes, &response); err != nil {
		log.Fatal(err)
	}
	return response.Posts
}

func main() {
	filename := "all.json"
	bytes := readFile(filename)
	posts := parseJSON(bytes)
	fmt.Println(posts)

	// fmt.Println(len(response.posts))
	// fmt.Println(string(byteArray))

	// db, err := connect("blog.db")
	// if err != nil {
	//  	panic("failed to connect database")
	// }

	// e := echo.New()
	//
	// api.DefineRoutes(e)
	// e.Logger.Fatal(e.Start(":8000"))
}
