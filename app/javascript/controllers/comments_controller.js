import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    clearComment() {
        this.element.reset();
    }
}
