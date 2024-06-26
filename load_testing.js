import http from 'k6/http';
import {check, sleep} from 'k6';

export const options = {
    vus: 20,
    duration: '10m',
};
export default function(){
    let url = http.get("https://petstore.octoperf.com/actions/Catalog.action");
    check(url, {'status is 200': (r) => r.status === 200,});
    sleep(1);

    url = http.get("https://petstore.octoperf.com/actions/Catalog.action;jsessionid=FCBF4C5A907B8DE7C11E006362683F95?viewCategory=&categoryId=FISH");
    check(url, {'status is 200': (r) => r.status === 200,});
    sleep(1);

    url = http.get("https://petstore.octoperf.com/actions/Catalog.action?viewProduct=&productId=FI-SW-01");
    check(url, {'status is 200': (r) => r.status === 200,});
    sleep(1);
}
