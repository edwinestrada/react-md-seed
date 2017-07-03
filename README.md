## Contains

- Docker
- Material Design UI
- Storybook

---

## Docker

```
docker build -t react-md-seed-image .
docker run --name react-md-seed-container -p 3000:3000 -p 9000:9000 -v $(pwd)/src:/app/src -v $(pwd)/build:/app/build react-md-seed-image
docker run -it --name react-md-seed-container -p 3000:3000 -p 9009:9009 -v $(pwd)/src:/app/src -v $(pwd)/build:/app/build react-md-seed-image /bin/bash
docker start -i react-md-seed-container
```

---

## Future Features

- [ ] Sass setup
- [ ] Docker compose