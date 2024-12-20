defmodule CarouselBuilder.Repo.Migrations.CreateSlides do
  use Ecto.Migration

  def change do
    create table(:slides) do
      add :background_color, :string, null: false
      add :font_color, :string, null: false
      add :quill_delta_content, :text, default: "", null: false

      timestamps()
    end
  end
end
