import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 20,
  duration: '2m',
};

export default function () {
  http.get('http://a654f9c2e94004e8fb75a1d88a16a4d9-1590902811.us-east-1.elb.amazonaws.com/');
  sleep(1);
}
