module Api
  module V1
    class TodosController < ActionController::Base
      respond_to :json
      def index
        render json: Todo.all.order(:id)
      end

      def create
        todo = Todo.new(todo_params)
        if todo.save
          render json: todo
        else
          render status: 422, json: todo.errors
        end
      end

      def toggle
        todo = Todo.find_by_id(params[:id])
        if todo
          todo.update(completed: !todo.completed)
          render json: todo
        else
          head status: 404
        end
      end

      private

      def todo_params
        params.require(:todo).permit(:text, :completed)
      end
    end
  end
end