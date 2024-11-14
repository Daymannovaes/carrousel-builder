defmodule Carousel.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      CarouselWeb.Telemetry,
      Carousel.Repo,
      {DNSCluster, query: Application.get_env(:carousel, :dns_cluster_query) || :ignore},
      {Phoenix.PubSub, name: Carousel.PubSub},
      # Start the Finch HTTP client for sending emails
      {Finch, name: Carousel.Finch},
      # Start a worker by calling: Carousel.Worker.start_link(arg)
      # {Carousel.Worker, arg},
      # Start to serve requests, typically the last entry
      CarouselWeb.Endpoint
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: Carousel.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  @impl true
  def config_change(changed, _new, removed) do
    CarouselWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
