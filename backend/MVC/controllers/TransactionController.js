import TransactionService from "../services/TransactionService.js";

class TransactionController {
  async getTransactions(request, response, next) {
    try {
      const transactions = await TransactionService.getTransactions();
      return response.status(200).json(transactions);
    } catch (err) {
      next(err);
    }
  }

  async getTransactionById(request, response, next) {
    try {
      const { id } = request.params;
      const transaction = await TransactionService.getTransactionById(id);
      return response.status(200).json(transaction);
    } catch (err) {
      next(err);
    }
  }

  async addTransaction(request, response, next) {
    try {
      const { clientId, propertyId, agentId, amount} = request.body;
      const transaction = await TransactionService.addTransaction(
        clientId,
        propertyId,
        agentId,
        amount,
      );
      return response.status(201).json(transaction);
    } catch (err) {
      next(err);
    }
  }

  async updateTransaction(request, response, next) {
    try {
      const { id } = request.params;
      const { amount, propertyId, agentId, clientId } =
        request.body;
      const transaction = await TransactionService.updateTransaction(
        id,
        amount,
        propertyId,
        agentId,
        clientId
      );
      return response.status(200).json(transaction);
    } catch (err) {
      next(err);
    }
  }
  async deleteTransaction(request, response, next) {
    try {
      const transaction = await TransactionService.deleteTransaction(
        request.params.id
      );
      return response.status(200).json(transaction);
    } catch (err) {
      next(err);
    }
  }
}

export default new TransactionController();
