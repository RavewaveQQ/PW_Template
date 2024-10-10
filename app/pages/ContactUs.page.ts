import { Header } from '@components';
import {AppPage} from '@page.object';
import { step } from '@step';

export class ContactUs extends AppPage {
    readonly header: Header = new Header(this.page);
    
    public pagePath = '/contact_us';


    @step()
    async expectLoaded() {
        
    };
}