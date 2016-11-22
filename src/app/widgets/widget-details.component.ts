import {Output, OnInit, EventEmitter, Input, Component} from "@angular/core";
import {Widget} from "../shared/models/widget";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
    selector: 'widget-details',
    template: `

   `
})
export class WidgetDetails implements OnInit {
    originalName: string;
    selectedWidget: Widget;
    @Output() saved = new EventEmitter();
    @Output() cancelled = new EventEmitter();
    widgetForm: FormGroup;

    @Input() set widget(value: Widget){
        if (value) this.originalName = value.name;
        this.selectedWidget = Object.assign({}, value);
    }

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.widgetForm = this.fb.group({
            widgetName: [this.selectedWidget.name, Validators.required],
            widgetPrice: [this.selectedWidget.price, Validators.required]
        });
    }
}