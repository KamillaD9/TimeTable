FROM python:3.7

MAINTAINER KamillaD9

RUN apt-get install git

RUN git clone https://83bc74ae702786581999e4ff5d9b975f39ae3ba3:@github.com/KamillaD9/TimeTable /srv/TimeTable

WORKDIR /srv/TimeTable

COPY ./TimeTableL /srv/TimeTable

RUN pip install -r requirements.txt

RUN pip install gunicorn