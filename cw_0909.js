function ListNode(data, next) {
  this.data = data
  this.next = next
}

function mergeLists(head1, head2) {
  if (head1 === null) {
    return head2
  }
  if (head2 === null) {
    return head1
  }

  let dummy = new ListNode(-1)
  let result = dummy

  while (head1 && head2) {
    if (head1.data <= head2.data) {
      result.next = head1
      head1 = head1.next
    } else {
      result.next = head2
      head2 = head2.next
    }
    result = result.next
  }

  if (head1) {
    result.next = head1
  }
  if (head2) {
    result.next = head2
  }

  return dummy.next

  /* testing recursive
  if (head1.val < head2.val) {
    head1.next = mergeLists(head1.next, head2)
    return head1
  } else {
    head2.next = mergeLists(head1, head2.next)
    return head2
  }
  */
}


function processData(input) {
  // console.log(input.split('\n'))
  input = input.split('\n')
  function Queue() {
      this.innerStack = []
      this.outerStack = []
  }
  
  Queue.prototype.enqueue = function enqueue(val) {
      this.innerStack.push(val)
  }
  
  Queue.prototype.print = function print() {
      console.log(this.innerStack[0])
  }

  Queue.prototype.isEmpty = function isEmpty(val) {
      return this.innerStack.length === 0
  }

  Queue.prototype.dequeue = function dequeue(val) {
      if (this.isEmpty()) {
          return
      }
      if (!this.isEmpty()) {
          this.outerStack.push(this.innerStack.shift())
      }
      return this.outerStack.pop()
  }
  
  let q = new Queue()
  
  for (let i = 1;i<=input[0];i++) {
      if (input[i].substring(0,1) == 1) {
      // console.log('enque', input[i].slice(2))
        q.enqueue(Number(input[i].slice(2)))
        // q.print()
      }
      if (input[i].substring(0,1) == 2) {
      // console.log('dq', input[i].substring(0,1))
        q.dequeue()
        // q.print()
      }
      if (input[i].substring(0,1) == 3) {
      // console.log('print', input[i].substring(0,1))
          q.print()
      }
  }
}

// processData('10\n1 76\n1 33\n2\n1 23\n1 97\n1 21\n3\n3\n1 74\n3')


function isBalanced(s) {
  let brackets = {
    '{': '}',
    '[': ']',
    '(': ')'
  }

  s = s.split('\n')
  let answer = []
  for (let i = 1; i <= s[0]; i++) {
    let stack = []
    answer.push('YES')
    for (let letter of s[i]) {
      if (brackets[letter]) {
        stack.push(brackets[letter])
      } else {
        if (stack.pop() !== letter) {
          answer[i-1] = 'NO'
        }
      }
    }
  }
  return answer.join('\n')
}

/* final answer
  let brackets = {
    '{': '}',
    '[': ']',
    '(': ')'
  }

  s = s.split('\n')
  let answer = []
  for (let i = 1; i <= s[0]; i++) {
    let stack = []
    answer.push('YES')
    for (let letter of s[i]) {
      if (brackets[letter]) {
        stack.push(brackets[letter])
      } else {
        if (stack.pop() !== letter) {
          answer[i-1] = 'NO'
        }
      }
    }
  }
*/

// console.log(isBalanced('1\n{[()]}'))
console.log(isBalanced('3\n{[()]}\n{[(])}\n{{[[(())]]}}'))

    // let brackets = s[i].split('')
    // for (let j = 0; j < brackets.length; j++) {
    //   if (s[i][j].match(curly)) {
    //     // s[i][j].replace(curly,curlyR)
    //     // console.log(s[i][j])
    //   } else if (s[i][j].match(square)) {
    //     // s[i][j] = s[i][j].replace(square,squareR)
    //   } else if (s[i][j].match(round)) {
    //     // s[i][j] = s[i][j].replace(round,roundR)
    //   }
    //   // console.log(s[i][j])
    // }
      // console.log(s[i])
      // console.log(s[i].split('').reverse().join(''))
