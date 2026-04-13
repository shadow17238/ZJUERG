# 升学之路

## 环境与资源学院飞跃手册

<style>
.tab-container {
  margin-bottom: 20px;
  font-family: Arial, sans-serif;
}
.tab-buttons {
  display: flex;
  border-bottom: 1px solid #ddd;
  margin-bottom: 0;
}
.tab-button {
  padding: 8px 16px;
  background: #f5f5f5;
  border: 1px solid #ddd;
  border-bottom: none;
  cursor: pointer;
  font-size: 14px;
  color: #333;
  transition: all 0.2s;
  border-radius: 4px 4px 0 0;
  margin-right: 2px;
}
.tab-button:hover {
  background: #e8e8e8;
}
.tab-button.active {
  background: white;
  border-bottom: 1px solid white;
  color: #000;
  font-weight: 500;
}
.tab-content {
  border: 1px solid #ddd;
  border-top: none;
  padding: 10px;
  border-radius: 0 0 4px 4px;
  background: white;
}
</style>

<div class="tab-container">
  <div class="tab-buttons">
    <div class="tab-button active" data-tab="2025">2025版</div>
    <div class="tab-button" data-tab="2024">2024版</div>
  </div>
  
  <div class="tab-content">
    <div id="tab-2025" class="tab-panel active">
      <iframe src="pdfs/环境与资源学院飞跃手册（2025版）.pdf" width="100%" height="800px" frameborder="0"></iframe>
    </div>
    <div id="tab-2024" class="tab-panel" style="display: none;">
      <iframe src="pdfs/环境与资源学院飞跃手册（2024版）.pdf" width="100%" height="800px" frameborder="0"></iframe>
    </div>
  </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabPanels = document.querySelectorAll('.tab-panel');
  
  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      const tabId = this.dataset.tab;
      
      // 更新按钮状态
      tabButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      // 更新面板显示
      tabPanels.forEach(panel => {
        panel.style.display = 'none';
      });
      
      const targetPanel = document.getElementById(`tab-${tabId}`);
      if (targetPanel) {
        targetPanel.style.display = 'block';
      }
    });
  });
});
</script>

## 其他升学资源

### 推免

### 留学

### 考研
