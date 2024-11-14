defmodule Carousel.Repo do
  use Ecto.Repo,
    otp_app: :carousel,
    adapter: Ecto.Adapters.Postgres
end
