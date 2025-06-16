package main

import (
	"bytes"
	"context"
	"os/exec"
)

type App struct {
	ctx context.Context
}

func NewApp() *App {
	return &App{}
}

func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

func (a *App) ExecuteCommmand(comando string, caminho string) string {
	var out bytes.Buffer
	cmd := exec.Command("powershell", "-Command", comando)
	cmd.Dir = caminho

	cmd.Stdout = &out

	err := cmd.Run()
	if err != nil {
		return err.Error()
	}
	return out.String()
}
