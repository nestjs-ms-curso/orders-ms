import { PaginationDto } from 'src/common/dto/products';
import { IsEnum, IsOptional } from 'class-validator';
import { OrderStatus } from '@prisma/client';
import { OrderStatusList } from '../enum/order.enum';

export class OrderPaginationDto extends PaginationDto {
  @IsOptional()
  @IsEnum(OrderStatusList, {
    message: `Valid status are ${OrderStatusList}`,
  })
  status: OrderStatus;
}
