defmodule CarouselBuilderWeb.SlideJSON do
  alias CarouselBuilder.Slides.Slide

  @doc """
  Renders a list of slides.
  """
  def index(%{slides: slides}) do
    %{data: for(slide <- slides, do: data(slide))}
  end

  @doc """
  Renders a single slide.
  """
  def show(%{slide: slide}) do
    %{data: data(slide)}
  end

  def data(%Slide{} = slide) do
    %{
      id: slide.id,
      background_color: slide.background_color,
      font_color: slide.font_color,
      quill_delta_content: slide.quill_delta_content
    }
  end
end
