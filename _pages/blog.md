---
layout: page
permalink: /news/
title: News
nav: true
nav_order: 8
description: Latest updates from ESB AI Lab Corporation
---

<div class="news">
  {% assign news = site.news | reverse %}
  {% if news.size > 0 %}
    <ul class="news-date-blocks">
      {% for item in news %}
        <li class="news-date-block-item">
          <div class="date-block">
            <div class="date-month">{{ item.date | date: '%b' }}</div>
            <div class="date-day">{{ item.date | date: '%d' }}</div>
            <div class="date-year">{{ item.date | date: '%Y' }}</div>
          </div>
          <div class="news-body">
            {% if item.inline %}
              {{ item.content | remove: '<p>' | remove: '</p>' | emojify }}
            {% else %}
              <strong><a class="news-title" href="{{ item.url | relative_url }}">{{ item.title }}</a></strong><br>
              {{ item.description }}
            {% endif %}
          </div>
        </li>
      {% endfor %}
    </ul>
  {% else %}
    <p>No news yet. Check back soon!</p>
  {% endif %}
</div>
