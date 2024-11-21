# This file is responsible for configuring your application
# and its dependencies with the aid of the Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
import Config

config :carousel_builder,
  ecto_repos: [CarouselBuilder.Repo],
  generators: [timestamp_type: :utc_datetime]

# Configures the endpoint
config :carousel_builder, CarouselBuilderWeb.Endpoint,
  url: [host: "localhost"],
  adapter: Bandit.PhoenixAdapter,
  render_errors: [
    formats: [json: CarouselBuilderWeb.ErrorJSON],
    layout: false
  ],
  pubsub_server: CarouselBuilder.PubSub,
  live_view: [signing_salt: "32VECgpm"]

# Configures the mailer
#
# By default it uses the "Local" adapter which stores the emails
# locally. You can see the emails in your browser, at "/dev/mailbox".
#
# For production it's recommended to configure a different adapter
# at the `config/runtime.exs`.
config :carousel_builder, CarouselBuilder.Mailer, adapter: Swoosh.Adapters.Local

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Oban config
config :carousel_builder, Oban,
  repo: CarouselBuilder.Repo,
  plugins: [Oban.Plugins.Pruner],
  queues: [
    default: 10
  ]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{config_env()}.exs"
