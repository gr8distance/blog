package posts

import (
	"encoding/json"
	"log"

	"io/ioutil"

	"github.com/samber/lo"
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

func ReadFile(filename string) []byte {
	bytes, err := ioutil.ReadFile(filename)
	if err != nil {
		panic(err)
	}
	return bytes
}

func ParseJSON(bytes []byte) Response {
	var response Response
	if err := json.Unmarshal(bytes, &response); err != nil {
		log.Fatal(err)
	}
	return response
}

func FetchAll() []Post {
	filename := "all.json"
	bytes := ReadFile(filename)
	posts := ParseJSON(bytes)
	return posts.Posts
}

func Fetch(id string) Post {
	posts := FetchAll()
	post, _ := lo.Find(posts, func(post Post) bool {
		return post.Id == id
	})
	return post
}
