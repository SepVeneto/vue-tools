<template>
  <ul class="timeline-container">
    <li v-for="item in nodeList" :key="item.id">
      <div class="timestamp">{{item.timestamp}}</div>
      <div class="wrapper-line">
        <div :class="['node', item.status]">{{item.status | filterStatus}}</div>
        <div class="tail"></div>
      </div>
      <div class="wrapper-content">
        <div class="card">
          <div class="label">{{item.type | filterNode('node')}}</div>
          <div class="content">
            <div><span>{{item.type | filterNode('label')}}：{{item.content.name}}</span></div>
            <div><span>备注：</span>{{item.content.remark}}</div>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'timeline',
  filters: {
    filterNode(val, action) {
      if (!val) {
        return val;
      }
      return {
        requireConfirm: {
          node: '需求确认',
          label: '确认人'
        },
        approval: {
          node: '审批',
          label: '审批人',
        },
        execute: {
          node: '执行',
          label: '执行人',
        },
        finish: {
          node: '完成确认',
          label: '确认人',
        },
        check: {
          node: '复核',
          label: '复核人',
        },
      }[val][action];
    },
    filterStatus(val) {
      if (!val) {
        return val;
      }
      return {
        success: '通过',
        fail: '驳回',
        wait: '等待',
      }[val]
    }
  },
  data() {
    return {
      nodeList: [
        {
          id: 1,
          status: '',
          type: 'check',
          // timestamp: '2010-01-01 22:22:22',
          content: {
            name: '维内托',
            // remark: '测试文本测试文本测试文本测试文本测试文本'
          }
        },
        {
          id: 2,
          status: '',
          type: 'finish',
          // timestamp: '2010-01-01 22:22:22',
          content: {
            name: '维内托',
            // remark: '测试文本测试文本测试文本测试文本测试文本'
          }
        },
        {
          id: 3,
          status: 'fail',
          type: 'execute',
          timestamp: '2010-01-01 22:22:22',
          content: {
            name: '维内托',
            remark: '测试文本测试文本测试文本测试文本测试文本'
          }
        },
        {
          id: 4,
          status: 'success',
          type: 'approval',
          timestamp: '2010-01-01 22:22:22',
          content: {
            name: '维内托',
            remark: '测试文本测试文本测试文本测试文本测试文本'
          }
        },
        {
          id: 5,
          status: 'success',
          type: 'approval',
          timestamp: '2010-01-01 22:22:22',
          content: {
            name: '维内托',
            remark: '测试文本测试文本测试文本测试文本测试文本'
          }
        },
        {
          id: 6,
          status: 'success',
          type: 'requireConfirm',
          timestamp: '2010-01-01 22:22:22',
          content: {
            name: '维内托',
            remark: '测试文本测试文本测试文本测试文本测试文本'
          }
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  padding: 0;
}
.timeline-container {
  position: relative;
  li {
    display: flex;
    &:first-child {
      .wrapper-line {
        &::before {
          width: 1px;
          border: none;
        }
      }
    }
    &:last-child {
      .tail {
        display: none;
      }
    }
    .timestamp {
      width: 90px;
      margin-top: 20px;
    }
    .wrapper-line {
      display: flex;
      height: 100%;
      align-items: center;
      flex-direction: column;
      margin: 0 10px;
      margin-right: 20px;
      &::before {
        content: '';
        height: 20px;
        width: 0px;
        border: 2px solid #e4e7ed;
      }
    }
    .wrapper-content {
      position: relative;
      .content {
        width: 300px;
        line-height: 1.6em;
        border: 1px solid #e4e7ed;
        padding: 10px;
        position: relative;
        &::after {
          position: absolute;
          content: '';
          width: 14px;
          height: 14px;
          border-top: 1px solid #e4e7ed;
          border-left: 1px solid #e4e7ed;
          transform: rotate(-45deg);
          background: #fff;
          left: -9px;
          top: 18px;
        }
      }
    }
    .tail {
      border: 2px solid #e4e7ed;
      min-height: 100px;
    }
    .node {
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      border-radius: 50%;
      background: #909399;
      &.success {
        background: #67C23A;
      }
      &.fail {
        background: #F56C6C;
      }
      &.wait {
        background: #E6A23C;
      }
    }
    .tail, .node {
    }
  }
}
</style>
