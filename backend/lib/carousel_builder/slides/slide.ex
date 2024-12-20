defmodule CarouselBuilder.Slides.Slide do
  @moduledoc false

  use Ecto.Schema

  import Ecto.Changeset

  schema "slides" do
    field :background_color, :string
    field :font_color, :string
    field :quill_delta_content, :string

    timestamps()
  end

  @doc false
  def changeset(slide, attrs) do
    slide
    |> cast(attrs, [:background_color, :font_color, :quill_delta_content])
    |> validate_required([:background_color, :font_color, :quill_delta_content])
  end
end
