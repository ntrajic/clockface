// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps} from '../../Types'

export interface TableHeaderProps extends StandardFunctionProps {}

export type TableHeaderRef = HTMLTableSectionElement

export const TableHeader = forwardRef<TableHeaderRef, TableHeaderProps>(
  ({id, style, testID = 'table-header', children, className}, ref) => {
    const tableHeaderClass = classnames('cf-table--header', {
      [`${className}`]: className,
    })

    return (
      <thead
        id={id}
        ref={ref}
        style={style}
        className={tableHeaderClass}
        data-testid={testID}
      >
        {children}
      </thead>
    )
  }
)

TableHeader.displayName = 'TableHeader'
