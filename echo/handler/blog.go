package handler

import (
	"app/posts"
	"net/http"

	"github.com/labstack/echo/v4"
)

func BlogAll(c echo.Context) error {
	return c.JSON(http.StatusOK, posts.FetchAll())
}

func BlogFetch(c echo.Context) error {
	id := c.Param("id")
	return c.JSON(http.StatusOK, posts.Fetch(id))
}

// func BlogRecent(c echo.Context) error {
//  	return c.JSON(http.StatusOK, posts.Recent())
// }
