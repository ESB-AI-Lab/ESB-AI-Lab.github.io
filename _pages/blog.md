---
layout: page
permalink: /news/
title: News
nav: true
nav_order: 4
description: Latest updates from the ES Bioinformatics and AI Lab
---

<div class="news">
  {% assign news = site.news | reverse %}
  {% if news.size > 0 %}
    <ul class="post-list">
      {% for item in news %}
        <li>
          <h3>
            {% if item.inline %}
              <span class="news-date">{{ item.date | date: '%B %d, %Y' }}</span>
            {% else %}
              <a class="news-title" href="{{ item.url | relative_url }}">{{ item.title }}</a>
              <span class="news-date">{{ item.date | date: '%B %d, %Y' }}</span>
            {% endif %}
          </h3>
          <div class="news-content">
            {% if item.inline %}
              {{ item.content | remove: '<p>' | remove: '</p>' | emojify }}
            {% else %}
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
