export const TO_ADD_EDU = 'TO_ADD_EDU'
export const REMOTE_EDU = 'REMOTE_EDU'
export const UPDATE_EDU = 'UPDATE_EDU'

// 添加教育经历
export function toAddEdu(){
  return {
    type:TO_ADD_EDU
  }
}
// 删除教育经历
export function removeEdu(index){
  return {
    type:REMOTE_EDU,
    index
  }
}
// 更新教育经历
export function updateEdu(edu){
  return {
    type:UPDATE_EDU,
    payload:edu
  }
}