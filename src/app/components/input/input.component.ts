import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {
  FormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { HotToastService } from '@ngxpert/hot-toast';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../components/button/button.component';
import { ApiService } from '../../services/api.service';
import { BurgerInterface } from '../../interfaces/burger-interface';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ButtonComponent,
    MatSelectModule,
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  // Serviço de notificação injetado para exibir mensagens de feedback
  private toast: HotToastService = inject(HotToastService);

  // Definição do formulário reativo para gerenciar os dados do pedido
  burgerForm: FormGroup;

  // Lista de produtos disponíveis carregados da API
  burgers: BurgerInterface[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService
  ) {
    // Configuração inicial do formulário com validações para cada campo
    this.burgerForm = this.formBuilder.group({
      product1: this.formBuilder.group({
        productId: [null, Validators.required], // Campo obrigatório para o primeiro produto
        quantity: [1, [Validators.required, Validators.min(1)]], // Quantidade mínima de 1
      }),
      product2: this.formBuilder.group({
        productId: [null, Validators.required], // Campo obrigatório para o segundo produto
        quantity: [1, [Validators.required, Validators.min(1)]], // Quantidade mínima de 1
      }),
      observation: ['', Validators.required], // Observação do pedido, obrigatória
      value: [{ value: 0, disabled: true }], // Campo desabilitado para exibir o valor total calculado
    });

    // Carrega os produtos disponíveis ao inicializar o componente
    this.apiService.getProducts().subscribe((burgers) => {
      this.burgers = burgers; // Armazena os produtos recebidos
      this.setupValueCalculation(); // Configura o cálculo do valor total
    });
  }

  // Configura a lógica para calcular automaticamente o valor total do pedido
  setupValueCalculation(): void {
    this.burgerForm.valueChanges.subscribe(() => {
      const formValue = this.burgerForm.value;

      // Encontra os preços dos produtos selecionados com base no ID
      const product1 = this.burgers.find(
        (burger) => burger.id === formValue.product1?.productId
      );
      const product2 = this.burgers.find(
        (burger) => burger.id === formValue.product2?.productId
      );

      // Realiza o cálculo do valor total com base nos preços e quantidades
      const totalValue =
        (product1?.price || 0) * (formValue.product1?.quantity || 0) +
        (product2?.price || 0) * (formValue.product2?.quantity || 0);

      // Formata o valor para exibição no formato de moeda (duas casas decimais)
      const formattedValue = Number(totalValue.toFixed(2));

      // Atualiza o campo de valor no formulário sem disparar eventos adicionais
      this.burgerForm.patchValue(
        { value: formattedValue },
        { emitEvent: false }
      );
    });
  }

  // Envia o pedido para a API, tratando sucessos e falhas
  async submitOrder(): Promise<void> {
    if (this.burgerForm.valid) {
      const formValue = this.burgerForm.getRawValue(); // Recupera todos os valores do formulário, incluindo os desabilitados

      // Monta a estrutura do pedido com os dados do formulário
      const order = {
        statusId: 1, // Identificador do status do pedido (mockado como "pendente")
        userOrders: [{ userId: 1 }], // Associando um usuário ao pedido (mockado como ID 1)
        productOrders: [formValue.product1, formValue.product2], // Lista de produtos do pedido
        observation: formValue.observation, // Observação do cliente
        value: formValue.value, // Valor total do pedido
      };

      try {
        // Envia o pedido para a API e aguarda a resposta
        await this.apiService.createOrder(order);

        // Exibe uma mensagem de sucesso e limpa o formulário
        this.toast.success('Pedido criado com sucesso');
        this.burgerForm.reset();
      } catch (error) {
        // Exibe uma mensagem de erro em caso de falha e loga o erro no console
        this.toast.error('Erro ao criar pedido');
        console.error('Erro ao criar pedido', error);
      }
    } else {
      // Exibe uma mensagem caso o formulário seja inválido
      this.toast.error('Formulário inválido');
    }
  }
}
