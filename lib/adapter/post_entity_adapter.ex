defmodule Adapter.PostEntityAdapter do
  def to_schema(entity) do
    %{
      id: entity.id,
      user_id: entity.user.id,
      wallet_id: entity.wallet_id,
      amount: entity.amount
    }
  end
end
