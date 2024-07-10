volume_name="getting-started-todo-app_todo-mysql-data"
for container in $(docker ps -q); do
    if docker inspect --format="{{json .Mounts}}" "$container" | grep -q "$volume_name"; then
        echo "Container $container is using volume $volume_name"
    fi
done
