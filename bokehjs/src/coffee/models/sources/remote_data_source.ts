/* XXX: partial */
import {ColumnDataSource} from "./column_data_source"
import * as p from "core/properties"

export namespace RemoteDataSource {
  export interface Attrs extends ColumnDataSource.Attrs {
    data_url: string
    polling_interval: number
  }

  export interface Opts extends ColumnDataSource.Opts {}
}

export interface RemoteDataSource extends RemoteDataSource.Attrs {}

export abstract class RemoteDataSource extends ColumnDataSource {

  constructor(attrs?: Partial<RemoteDataSource.Attrs>, opts?: RemoteDataSource.Opts) {
    super(attrs, opts)
  }

  static initClass(): void {
    this.prototype.type = 'RemoteDataSource'

    this.define({
      data_url:         [ p.String    ],
      polling_interval: [ p.Number    ],
    })
  }

  abstract setup(): void
}
RemoteDataSource.initClass()