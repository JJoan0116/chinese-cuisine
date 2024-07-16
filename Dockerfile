# 基于node基础镜像来修改
FROM node:latest
# 指定当前工作目录
WORKDIR /app
# 把容器外的内容复制到容器内
COPY . .
# 在容器内执行命令
RUN npm config set registry https://registry.npmmirror.com/
RUN npm install -g http-server
# 声明当前容器要访问的网络端口，比如这里起服务会用到 8080
EXPOSE 8080
# 容器启动的时候执行的命令
CMD ["http-server", "-p", "8080"]
