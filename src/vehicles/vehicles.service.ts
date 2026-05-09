import {

  Injectable,

  NotFoundException,

} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Vehicle } from './entities/vehicle.entity';

import { CreateVehicleDto } from './dto/vehicle.dto';

@Injectable()

export class VehiclesService {

  constructor(

    @InjectRepository(Vehicle)

    private readonly vehicleRepository: Repository<Vehicle>,

  ) {}

  async create(dto: CreateVehicleDto) {

    const vehicle = this.vehicleRepository.create(dto);

    return this.vehicleRepository.save(vehicle);

  }

  async findAll() {

    return this.vehicleRepository.find();

  }

  async findOne(id: number) {

    const vehicle = await this.vehicleRepository.findOneBy({ id });

    if (!vehicle) {

      throw new NotFoundException(

        `Vehicle ${id} no existe`

      );

    }

    return vehicle;

  }

  async update(

    id: number,

    dto: CreateVehicleDto,

  ) {

    await this.vehicleRepository.update(id, dto);

    return this.findOne(id);

  }

  async remove(id: number) {

    const vehicle = await this.findOne(id);

    return this.vehicleRepository.remove(vehicle);

  }
}