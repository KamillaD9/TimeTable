FROM python:3.7

MAINTAINER KamillaD9

RUN apt-get install git

TimeTable /srv/TimeTable

WORKDIR /srv/TimeTable

COPY ./TimeTableL /srv/TimeTable

RUN pip install -r requirements.txt

RUN pip install gunicorn

RUN pip install django-cors-headers
RUN pip install gevent