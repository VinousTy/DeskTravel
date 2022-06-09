FROM python:3.9
ENV PYTHONUNBUFFERED 1
ENV APP_ROOT /code
WORKDIR ${APP_ROOT}
RUN mkdir staticfiles && mkdir media
RUN mkdir -p tmp/sockets
COPY requirements.txt ${APP_ROOT}/
RUN pip install -r requirements.txt
COPY . ${APP_ROOT}/
EXPOSE 8000
