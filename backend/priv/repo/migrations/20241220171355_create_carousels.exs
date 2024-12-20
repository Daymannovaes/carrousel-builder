defmodule CarouselBuilder.Repo.Migrations.CreateCarousels do
  use Ecto.Migration

  def change do
    create table(:carousels) do
      add :name, :string, null: false
      add :slide_id, references(:slides, on_delete: :delete_all), null: false
      add :is_active, :boolean, default: true, null: false

      timestamps()
    end

    create index(:carousels, [:slide_id])
  end
end
