
export function getTodayTotal(logs){
    const today= new Date().toISOString().split('T')[0];
    console.log(today);
    console.log(typeof logs[0]?.amount)
  console.log('runnning')
    return logs
            .filter(log=>log.time.startsWith(today))
            .reduce((sum,log)=>sum+ parseInt(log.amount), 0);
}

