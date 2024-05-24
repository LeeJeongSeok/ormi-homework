document.addEventListener('DOMContentLoaded', function() {
  // summit-button 클릭 이벤트 리스너 추가
  document.getElementById('summit-button').addEventListener('click', function(event) {
    event.preventDefault(); // 기본 제출 동작 막기
    document.getElementById('modal').style.display = 'block'; // 모달 표시
    document.getElementById('modal-background').style.display = 'block'; // 모달 배경 표시
  });

  // modal-button 클릭 이벤트 리스너 추가 (모달 닫기용)
  document.getElementById('modal-button').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none'; // 모달 숨기기
    document.getElementById('modal-background').style.display = 'none'; // 모달 배경 숨기기
  });
});
