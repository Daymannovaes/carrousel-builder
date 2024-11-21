defmodule CarouselBuilder.Repo do
  use Ecto.Repo,
    otp_app: :carousel_builder,
    adapter: Ecto.Adapters.Postgres
end
