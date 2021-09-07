import { get } from '../../request';
import { environment } from '../../../src/environments/environment';

test('get meeting by id', async () => {
  const meeting_id = '4f9de7a1-80e9-4e57-853e-a578e70efaf7';
  const response = await get(`${environment.content_url}/meeting/${meeting_id}`);
  expect(response.status).toBe(200);

  const meeting = response.data;
  expect(meeting.title).toBe('London is a capital of Great Britain');
  expect(meeting.cover.mdX2.url).toContain('/storage/a815df04-898e-4fd3-8472-8d89a15cb34d/e044f6f7-5ea1-43d3-9e62-85a51c6fe9d8/_london-mdX2.jpg');
  expect(meeting.subject.title).toContain('Geography');
  // TODO cover.mdX2.url
  // TODO subject.title
});
