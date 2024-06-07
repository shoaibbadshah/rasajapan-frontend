terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 3.0.1"
    }
    vercel = {
      source = "vercel/vercel"
      version = "1.11.0"
    }
    null = {
      source = "hashicorp/null"
      version = "~> 3.1"
    }
  }
}

provider "docker" {}

provider "vercel" {
  api_token = var.vercel_api_token
}

provider "null" {}

resource "docker_image" "nginx" {
  name         = "nginx"
  keep_locally = false
}

resource "docker_container" "nginx" {
  image = docker_image.nginx.image_id
  name  = "tutorial"

  ports {
    internal = 80
    external = 8000
  }
}

# Create a Vercel project
resource "vercel_project" "my_project" {
  name      = "my-vercel-project"
  framework = "nextjs"
}

# Example of creating a Vercel environment variable using null_resource and local-exec
resource "null_resource" "create_env_var" {
  provisioner "local-exec" {
    command = <<EOT
      curl -X POST https://api.vercel.com/v8/projects/${vercel_project.my_project.id}/env \
      -H "Authorization: Bearer ${var.vercel_api_token}" \
      -H "Content-Type: application/json" \
      -d '{
        "key": "MY_ENV_VAR",
        "value": "my_value",
        "target": ["production", "preview", "development"]
      }'
    EOT
  }

  # Ensure the request is sent after the project is created
  depends_on = [vercel_project.my_project]
}
