package handler

import (
	"net/http"

	"github.com/labstack/echo/v4"
)

func StatusAlive(c echo.Context) error {
	return c.JSON(http.StatusOK, map[string]string{
		"status": "alive",
	})
}
