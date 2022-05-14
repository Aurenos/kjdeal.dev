import Config

config :still,
  domain: "http://localhost:3000",
  dev_layout: true,
  input: Path.join(Path.dirname(__DIR__), "priv/site"),
  output: Path.join(Path.dirname(__DIR__), "_site"),
  ignore_files: ["assets"],
  watchers: [
    npx: [
      "tailwindcss",
      "-o",
      "../global.css",
      "--watch",
      "-i",
      "global.css",
      cd: "priv/site/assets",
      env: [{"NODE_ENV", if(Mix.env() == :prod, do: "production", else: "development")}]
    ]
  ]

config :logger,
  level: :info

import_config("#{Mix.env()}.exs")
