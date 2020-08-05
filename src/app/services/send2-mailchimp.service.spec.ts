import { TestBed } from '@angular/core/testing';

import { Send2MailchimpService } from './send2-mailchimp.service';

describe('Send2MailchimpService', () => {
  let service: Send2MailchimpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Send2MailchimpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
