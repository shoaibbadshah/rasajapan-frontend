terraform {
  required_providers {
    vercel = {
      source = "vercel/vercel"
    }
  }
}

provider "vercel" {
  api_token = var.vercel_api_token
}

variable "vercel_api_token" {}
variable "env_example" {}


resource "vercel_project" "rasajapan-frontend" {
  name            = "rasajapan-frontend"
  framework       = "nextjs"
  build_command   = "yarn build"
  team_id         = "team_cUUJOF5e58em9YTg9UnbzH1n"
  install_command = "yarn"
  git_repository = {
    type              = "github"
    repo              = "wrexiv/rasajapan-frontend"
    branch            = "main"
    production_branch = "main"
  }
  serverless_function_region = "hnd1"
  environment = [
    {
      key    = "ENV_EXAMPLE"
      value  = var.env_example
      target = ["production", "preview"]
    },
  ]
}
