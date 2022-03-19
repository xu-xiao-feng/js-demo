// 三个状态: pending, fulfilled, rejected
function sleep(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, ['done3333', 'done2']);
  })
}


async function asf(ms) {
  const data = await sleep(ms)
  console.log(data)
}

asf(1000)


// Promise.all([p1,p2,p3])

// Promise.race([p1,p2,p3])
