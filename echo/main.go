package main

import (
	"encoding/json"
	"fmt"
	"log"

	"io/ioutil"
	"net/http"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

func connect(dbName string) (*gorm.DB, error) {
	db, err := gorm.Open(sqlite.Open(dbName), &gorm.Config{})
	return db, err
}

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

func main() {
	url := "http://localhost:4000/api/blogs/all"
	bytes := fetch(url)
	var response Response
	if err := json.Unmarshal(bytes, &response); err != nil {
		log.Fatal(err)
	}
	fmt.Println(response)

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
