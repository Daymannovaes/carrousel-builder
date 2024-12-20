defmodule CarouselBuilder.Carousels.Carousel do
  @moduledoc false

  use Ecto.Schema

  import Ecto.Changeset

  alias CarouselBuilder.Slides.Slide

  schema "carousels" do
    field :name, :string
    field :is_active, :boolean, default: true

    belongs_to :slide, Slide

    timestamps()
  end

  @doc false
  def changeset(carousel, attrs) do
    carousel
    |> cast(attrs, [:name, :slide_id, :is_active])
    |> validate_required([:name, :slide_id, :is_active])
  end
end
