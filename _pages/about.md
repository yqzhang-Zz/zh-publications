---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id="publications"></span>

# 📝 完整论文列表 



<div style="display: flex; align-items: flex-end; margin-top: 35px; margin-bottom: 15px;">
  <h3 style="background-color: #4a4a4a; color: #ffffff; padding: 2px 8px; margin: 0; font-size: 1em; font-weight: 600; border-radius: 3px 3px 0 0; line-height: 1.2;">期刊论文</h3>
  <div style="flex-grow: 1; height: 2px; background-color: #4a4a4a;"></div>
</div>

{% for paper in site.data.journal_papers %}
<div style="display: flex; margin-bottom: 1.5em; text-align: left;">
  
  <div style="flex: 0 0 3.6em; color: #64748b; font-weight: bold; font-size: 1em; padding-top: 2px;">[{{ paper.id }}]</div>
  
  <div style="flex: 1;">
    
    <div>
      <span style="display: inline-block; background-color: #0b5394; color: #ffffff; padding: 2px 8px; border-radius: 4px; font-weight: bold; font-size: 0.85em; margin-right: 8px; vertical-align: middle; line-height: 1.2;">{{ paper.venue }}</span> 
      {{ paper.title }}
    </div>
    
    <div style="margin: 4px 0;">{{ paper.authors }}</div>
    
    <div style="margin-top: 4px;">
      
      {% assign meta_parts = "" %}
      
      {% if site.data.journal_meta[paper.journal_key].jcr %}
        {% assign meta_parts = meta_parts | append: "JCR " | append: site.data.journal_meta[paper.journal_key].jcr %}
      {% endif %}
      
      {% if site.data.journal_meta[paper.journal_key].if %}
        {% if meta_parts != "" %}{% assign meta_parts = meta_parts | append: " | " %}{% endif %}
        {% assign meta_parts = meta_parts | append: "IF: " | append: site.data.journal_meta[paper.journal_key].if %}
      {% endif %}
      
      {% if paper.tag != "" and paper.tag != nil %}
        {% if meta_parts != "" %}{% assign meta_parts = meta_parts | append: " | " %}{% endif %}
        {% assign meta_parts = meta_parts | append: paper.tag %}
      {% endif %}

      <span style="color: #0b5394; font-size: 0.9em; font-weight: bold; vertical-align: middle;">
        {% if meta_parts != "" %}{{ meta_parts }} | {% endif %}
      </span>
      
      <a href="{{ paper.link }}" target="_blank" style="color: #0b5394; border: 1px solid #0b5394; border-radius: 4px; padding: 1px 6px; text-decoration: none; font-weight: bold; font-size: 0.8em; white-space: nowrap; vertical-align: middle; margin-left: 2px;"><i class="fas fa-file-pdf"></i> Paper</a>
      
      {% if paper.link_cn %}
      <a href="{{ paper.link_cn }}" target="_blank" style="color: #0b5394; border: 1px solid #0b5394; border-radius: 4px; padding: 1px 6px; text-decoration: none; font-weight: bold; font-size: 0.8em; white-space: nowrap; vertical-align: middle; margin-left: 6px;"><i class="fas fa-language"></i> 中文版</a>
      {% endif %}

      {% if paper.code %}
      <a href="{{ paper.code }}" target="_blank" style="color: #0b5394; border: 1px solid #0b5394; border-radius: 4px; padding: 1px 6px; text-decoration: none; font-weight: bold; font-size: 0.8em; white-space: nowrap; vertical-align: middle; margin-left: 6px;">
        {% if paper.code contains 'github.com' %}
        <i class="fab fa-github"></i> Code
        {% else %}
        <i class="fas fa-file-archive"></i> Code
        {% endif %}
      </a>
      {% endif %}
      
      <button onclick="toggleBib('{{ paper.id }}')" style="color: #0b5394; background: none; border: 1px solid #0b5394; border-radius: 4px; padding: 1px 6px; font-weight: bold; font-size: 0.8em; white-space: nowrap; cursor: pointer; display: inline-block; font-family: inherit; vertical-align: middle; margin-left: 6px;"><i class="fas fa-quote-right"></i> Bib</button>
    </div>
    
    <div id="bib-{{ paper.id }}" style="display: none; margin-top: 10px; position: relative; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 12px; width: 100%; max-width: 650px; box-sizing: border-box; overflow-x: auto;">
      
<div style="position: absolute; top: 6px; right: 6px; display: flex; gap: 6px; z-index: 10;">
  <button onclick="copyBib(this)" style="background: #ffffff; border: 1px solid #cbd5e1; padding: 2px 6px; border-radius: 4px; font-size: 0.75em; cursor: pointer; color: #475569; font-weight: bold; transition: all 0.2s;">Copy</button>
  <button onclick="toggleBib('{{ paper.id }}')" style="background: #ffffff; border: 1px solid #cbd5e1; padding: 2px 6px; border-radius: 4px; font-size: 0.75em; cursor: pointer; color: #475569; font-weight: bold; transition: all 0.2s;">Fold</button>
</div>
      
      <pre style="margin: 0; font-size: 0.85em; font-family: 'Fira Code', 'JetBrains Mono', 'Consolas', 'Monaco', monospace; line-height: 1.6; color: #334155; white-space: pre; padding-top: 20px; padding-left: 10px; padding-bottom: 10px;">{{ paper.bib }}</pre>
    </div>

  </div>
</div>
{% endfor %}



<div style="display: flex; align-items: flex-end; margin-top: 35px; margin-bottom: 15px;">
  <h3 style="background-color: #4a4a4a; color: #ffffff; padding: 2px 8px; margin: 0; font-size: 1em; font-weight: 600; border-radius: 3px 3px 0 0; line-height: 1.2;">会议论文</h3>
  <div style="flex-grow: 1; height: 2px; background-color: #4a4a4a;"></div>
</div>


{% for conf in site.data.conference_papers %}
<div style="display: flex; margin-bottom: 1.5em; text-align: left;">
  
  <div style="flex: 0 0 3.6em; color: #64748b; font-weight: bold; font-size: 1em; padding-top: 2px;">[{{ conf.id }}]</div>
  
  <div style="flex: 1;">
    
    {% assign c_key = conf.conf_key | strip %}
    {% assign c_meta = site.data.conference_meta[c_key] %}
    <div>
      <span title="{{ c_meta.full_name }}" style="display: inline-block; background-color: #e0f2fe; color: #0b5394; padding: 2px 8px; border-radius: 4px; font-weight: bold; font-size: 0.85em; margin-right: 8px; vertical-align: middle; line-height: 1.2; cursor: help;">{{ conf.venue }}</span> 
      {{ conf.title }}
    </div>
    
    <div style="margin: 4px 0;">{{ conf.authors }}</div>
    
    <div style="margin-top: 4px;">
      
      {% assign meta_parts = "" %}
      
      {% if c_meta.ccf and c_meta.ccf != "-" %}
        {% assign meta_parts = meta_parts | append: "CCF-" | append: c_meta.ccf %}
      {% endif %}
      
      {% if c_meta.core and c_meta.core != "-" %}
        {% if meta_parts != "" %}{% assign meta_parts = meta_parts | append: " | " %}{% endif %}
        {% assign meta_parts = meta_parts | append: "CORE " | append: c_meta.core %}
      {% endif %}
      
      {% if conf.tag and conf.tag != "" %}
        {% if meta_parts != "" %}{% assign meta_parts = meta_parts | append: " | " %}{% endif %}
        {% assign meta_parts = meta_parts | append: conf.tag %}
      {% endif %}

      <span style="color: #0b5394; font-size: 0.9em; font-weight: bold; vertical-align: middle;">
        {% if meta_parts != "" %}{{ meta_parts }} | {% endif %}
      </span>
      
      <a href="{{ conf.link }}" target="_blank" style="color: #0b5394; border: 1px solid #0b5394; border-radius: 4px; padding: 1px 6px; text-decoration: none; font-weight: bold; font-size: 0.8em; white-space: nowrap; vertical-align: middle; margin-left: 2px;"><i class="fas fa-file-pdf"></i> Paper</a>
      
      {% if conf.extended %}
      <a href="{{ conf.extended }}" target="_blank" style="color: #0b5394; border: 1px solid #0b5394; border-radius: 4px; padding: 1px 6px; text-decoration: none; font-weight: bold; font-size: 0.8em; white-space: nowrap; vertical-align: middle; margin-left: 6px;"><i class="fas fa-file-alt"></i> Extended Version</a>
      {% endif %}

      {% if conf.code %}
      <a href="{{ conf.code }}" target="_blank" style="color: #0b5394; border: 1px solid #0b5394; border-radius: 4px; padding: 1px 6px; text-decoration: none; font-weight: bold; font-size: 0.8em; white-space: nowrap; vertical-align: middle; margin-left: 6px;">
        {% if conf.code contains 'github.com' %}
        <i class="fab fa-github"></i> Code
        {% else %}
        <i class="fas fa-file-archive"></i> Code
        {% endif %}
      </a>
      {% endif %}
      
      <button onclick="toggleConfBib('{{ conf.id }}')" style="color: #0b5394; background: none; border: 1px solid #0b5394; border-radius: 4px; padding: 1px 6px; font-weight: bold; font-size: 0.8em; white-space: nowrap; cursor: pointer; display: inline-block; font-family: inherit; vertical-align: middle; margin-left: 6px;"><i class="fas fa-quote-right"></i> Bib</button>
    </div>
    
    <div id="conf-bib-{{ conf.id }}" style="display: none; margin-top: 10px; position: relative; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 12px; width: 100%; max-width: 650px; box-sizing: border-box; overflow-x: auto;">
      <div style="position: absolute; top: 6px; right: 6px; display: flex; gap: 6px; z-index: 10;">
        <button onclick="copyConfBib(this)" style="background: #ffffff; border: 1px solid #cbd5e1; padding: 2px 6px; border-radius: 4px; font-size: 0.75em; cursor: pointer; color: #475569; font-weight: bold; transition: all 0.2s;">Copy</button>
        <button onclick="toggleConfBib('{{ conf.id }}')" style="background: #ffffff; border: 1px solid #cbd5e1; padding: 2px 6px; border-radius: 4px; font-size: 0.75em; cursor: pointer; color: #475569; font-weight: bold; transition: all 0.2s;">Fold</button>
      </div>
      <pre style="margin: 0; font-size: 0.85em; font-family: 'Fira Code', 'JetBrains Mono', 'Consolas', 'Monaco', monospace; line-height: 1.6; color: #334155; white-space: pre; padding-top: 20px; padding-left: 10px; padding-bottom: 10px;">{{ conf.bib }}</pre>
    </div>

  </div>
</div>
{% endfor %}

<script>
function toggleConfBib(id) {
  const el = document.getElementById('conf-bib-' + id);
  if (el.style.display === 'none' || el.style.display === '') {
    el.style.display = 'block';
  } else {
    el.style.display = 'none';
  }
}

function copyConfBib(copyBtn) {
  const preElement = copyBtn.parentElement.nextElementSibling;
  navigator.clipboard.writeText(preElement.innerText).then(() => {
    copyBtn.innerText = 'Copied!';
    copyBtn.style.backgroundColor = '#dcfce3';
    copyBtn.style.borderColor = '#22c55e';
    copyBtn.style.color = '#166534';
    setTimeout(() => {
      copyBtn.innerText = 'Copy';
      copyBtn.style.backgroundColor = '#ffffff';
      copyBtn.style.borderColor = '#cbd5e1';
      copyBtn.style.color = '#475569';
    }, 1500);
  });
}
</script>

<br>
<br>
注：此列表仅展示英文论文及被SCI/EI检索的论文。<br>
Note: This list exclusively features publications that are either written in English or officially indexed by SCI/EI.
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

<script>
// 控制 Bib 区域的原位顺滑下推与收起
function toggleBib(id) {
  const el = document.getElementById('bib-' + id);
  if (el.style.display === 'none' || el.style.display === '') {
    el.style.display = 'block';
  } else {
    el.style.display = 'none';
  }
}

// 托管一键静默复制与 Copied 状态反馈
function copyBib(copyBtn) {
  const preElement = copyBtn.parentElement.nextElementSibling;
  
  navigator.clipboard.writeText(preElement.innerText).then(() => {
    // 成功复制状态改变
    copyBtn.innerText = 'Copied!';
    copyBtn.style.backgroundColor = '#dcfce3'; // 转换为柔和绿背景
    copyBtn.style.borderColor = '#22c55e';
    copyBtn.style.color = '#166534';
    
    // 1.5秒后按钮自动复原
    setTimeout(() => {
      copyBtn.innerText = 'Copy';
      copyBtn.style.backgroundColor = '';
      copyBtn.style.borderColor = '';
      copyBtn.style.color = '';
    }, 1500);
  });
}
</script>

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

<div style="margin-top: 60px;">
  
  <div style="height: 1px; background: linear-gradient(to right, transparent, #cbd5e1, transparent);"></div>

  <div style="background: linear-gradient(to right, transparent, rgba(241, 245, 249, 0.8), transparent); padding: 40px 0 30px 0;">
    
    <div style="display: flex; justify-content: center; align-items: center; flex-wrap: wrap; gap: 50px;">
      
      <div style="text-align: left; line-height: 1.8;">
        
        <div style="font-weight: bold; font-size: 1.1em; margin-bottom: 5px; color: #4b5563;">
          📊 访问统计
        </div>
        
        <div style="color: #64748b; font-size: 0.9em;">
          <script async src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>
          <span id="busuanzi_container_site_pv" style="display:none;">
            👀 总访问量: <span id="busuanzi_value_site_pv" style="font-weight: bold; color: #475569;"></span> 次
          </span>
        </div>
        
        <div style="color: #94a3b8; font-size: 0.85em; margin-top: 2px;">
          © {{ site.time | date: "%Y" }} 张逸群. All rights reserved.<br>
          最后更新：{{ site.time | date: "%Y年%m月" }}
        </div>
        
      </div>

      <div style="width: 100px; opacity: 0.9;"> 
        <script type="text/javascript" id="clstr_globe" src="//clustrmaps.com/globe.js?d=lPtt2sUwH1MwEnQW4pcHVaruKWdriQxF0N9KIeqgnws"></script>
      </div>

    </div>
  </div>
</div>




<script>
  document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      var links = document.querySelectorAll('a');
      links.forEach(function(link) {
        if (link.href.includes('#about-me') || link.classList.contains('navbar-brand')) {
          var cleanLink = link.cloneNode(true); 
          cleanLink.href = 'https://yqzhang-zz.github.io/zh/'; 
          link.parentNode.replaceChild(cleanLink, link); 
        }
      });
    }, 800); 
  });
</script>





