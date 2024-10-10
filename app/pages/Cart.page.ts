import {AppPage} from '@page.object';
import { step } from '@step';
import { Header } from 'app/components/Header.component';


export  class Cart extends AppPage {
    readonly header: Header = new Header(this.page);

    public pagePath = '/view_cart';

    @step()
    async expectLoaded(message = 'Expected Cart is Loaded') {
    };
}